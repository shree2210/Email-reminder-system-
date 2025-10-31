<style>
  .schedule-section { padding: 60px 0 100px; }
  .schedule-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.1);
    padding: 3rem;
    max-width: 600px;
    margin: 0 auto;
    border: 2px solid rgba(102, 126, 234, 0.05);
  }

  [data-bs-theme="dark"] .schedule-card {
    background: rgba(50, 50, 80, 0.8);
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.2);
  }

  .schedule-header { text-align: center; margin-bottom: 2.5rem; }

  .schedule-header h1 {
    font-size: 2.2rem;
    font-weight: 800;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  .schedule-header p {
    color: #718096;
    font-size: 1.1rem;
  }

  [data-bs-theme="dark"] .schedule-header p { color: #b0b0b0; }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
  }

  .back-link:hover { gap: 1rem; color: var(--secondary-color); }

  .alert {
    border-radius: 15px;
    border: none;
    padding: 1.2rem 1.5rem;
    margin-bottom: 2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .alert-success {
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1));
    color: #0077be;
    border-left: 4px solid #4facfe;
  }

  .alert-danger {
    background: linear-gradient(135deg, rgba(245, 87, 108, 0.1), rgba(240, 147, 251, 0.1));
    color: #c7254e;
    border-left: 4px solid #f5576c;
  }

  [data-bs-theme="dark"] .alert-success { background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2)); color: #6fb3ff; }
  [data-bs-theme="dark"] .alert-danger { background: linear-gradient(135deg, rgba(245, 87, 108, 0.2), rgba(240, 147, 251, 0.2)); color: #ff8a9a; }

  .form-group { margin-bottom: 1.8rem; }
</style>

<section class="schedule-section">
  <div class="container">
    <div class="schedule-card">
      <a href="/" class="back-link"><i class="bi bi-arrow-left"></i>Back to Home</a>

      <div class="schedule-header">
        <h1>Schedule Your Reminder</h1>
        <p>Fill in the details to set up your email reminder</p>
      </div>

      <% if (typeof success !== 'undefined' && success) { %>
      <div class="alert alert-success" role="alert">
        <i class="bi bi-check-circle-fill"></i>
        <div>Great! Your reminder has been scheduled successfully!</div>
      </div>
      <% } %>

      <% if (typeof error !== 'undefined' && error) { %>
      <div class="alert alert-danger" role="alert">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <div>Error scheduling reminder. Please check all fields are filled correctly.</div>
      </div>
      <% } %>

      <form action="/schedule" method="POST">
        <div class="form-group">
          <label for="email" class="form-label"><i class="bi bi-envelope"></i>Email Address</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="your.email@example.com" required />
        </div>

        <div class="form-group">
          <label for="message" class="form-label"><i class="bi bi-chat-dots"></i>Reminder Message</label>
          <textarea class="form-control" id="message" name="message" placeholder="What do you want to be reminded about?" required minlength="5"></textarea>
        </div>

        <div class="form-group">
          <label for="datetime" class="form-label"><i class="bi bi-calendar-event"></i>Date & Time</label>
          <input type="datetime-local" class="form-control" id="datetime" name="datetime" required />
        </div>

        <div class="d-grid mt-4">
          <button type="submit" class="btn btn-primary btn-lg"><i class="bi bi-check-circle"></i>Schedule Reminder</button>
        </div>
      </form>
    </div>
  </div>
</section>
